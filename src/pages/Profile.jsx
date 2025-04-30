import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { TextField } from '../components/common/TextField';
import { Tabs } from '../components/common/Tabs';
import { Alert } from '../components/common/Alert';
import { Badge } from '../components/common/Badge';
import { Loader } from '../components/common/Loader';
import { Modal } from '../components/common/Modal';
import { Progress } from '../components/common/Progress';

export function Profile() {
  const { user, updateUserProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [activeTab, setActiveTab] = useState('personal');
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    region: '',
    ward: '',
    occupation: '',
    monthlyIncome: '',
  });

  useEffect(() => {
    // Populate profile data from user context when component mounts
    if (user) {
      setProfileData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        phone: user.phone || '',
        address: user.address || '',
        city: user.city || '',
        region: user.region || '',
        ward: user.ward || '',
        occupation: user.occupation || '',
        monthlyIncome: user.monthlyIncome || '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Call API to update profile
      await updateUserProfile(profileData);
      setIsEditing(false);
      setMessage({ 
        type: 'success', 
        text: 'Your profile information has been successfully updated.' 
      });
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error.message || 'There was an error updating your profile.' 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      
      {message.text && (
        <Alert 
          type={message.type} 
          message={message.text} 
          onClose={() => setMessage({ type: '', text: '' })}
        />
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Summary Card */}
        <Card className="md:col-span-1">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Profile Summary</h2>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-white">
                  {profileData.firstName && profileData.lastName 
                    ? `${profileData.firstName[0]}${profileData.lastName[0]}`
                    : 'U'}
                </span>
              </div>
              <h2 className="text-xl font-semibold mb-1">
                {profileData.firstName} {profileData.lastName}
              </h2>
              <p className="text-gray-500 mb-4">{profileData.email}</p>
              <div className="w-full mt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500">Membership Status</span>
                  <Badge type="success">Active</Badge>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500">Member Since</span>
                  <span className="font-medium">Jan 2023</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Credit Score</span>
                  <Badge type="primary">Good</Badge>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Profile Details */}
        <Card className="md:col-span-2">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Profile Details</h2>
              {!isEditing && (
                <Button 
                  variant="secondary" 
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </Button>
              )}
            </div>
            
            <Tabs 
              items={[
                { id: 'personal', label: 'Personal Info' },
                { id: 'contact', label: 'Contact Details' },
                { id: 'financial', label: 'Financial Info' }
              ]}
              activeTab={activeTab}
              onChange={handleTabChange}
            />

            <form onSubmit={handleSubmit}>
              {activeTab === 'personal' && (
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <TextField
                      label="First Name"
                      id="firstName"
                      name="firstName"
                      value={profileData.firstName}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <TextField
                      label="Last Name"
                      id="lastName"
                      name="lastName"
                      value={profileData.lastName}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <TextField
                      label="Email Address"
                      id="email"
                      name="email"
                      type="email"
                      value={profileData.email}
                      onChange={handleChange}
                      disabled={true} // Email usually can't be changed easily
                    />
                  </div>
                  <div>
                    <TextField
                      label="Phone Number"
                      id="phone"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              )}

              {activeTab === 'contact' && (
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <TextField
                      label="Street Address"
                      id="address"
                      name="address"
                      value={profileData.address}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <TextField
                      label="City"
                      id="city"
                      name="city"
                      value={profileData.city}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <TextField
                      label="Region"
                      id="region"
                      name="region"
                      value={profileData.region}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <TextField
                      label="Ward"
                      id="ward"
                      name="ward"
                      value={profileData.ward}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              )}

              {activeTab === 'financial' && (
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <TextField
                      label="Occupation"
                      id="occupation"
                      name="occupation"
                      value={profileData.occupation}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <TextField
                      label="Monthly Income"
                      id="monthlyIncome"
                      name="monthlyIncome"
                      value={profileData.monthlyIncome}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              )}

              {isEditing && (
                <div className="flex justify-end gap-2 mt-6">
                  <Button 
                    type="button" 
                    variant="secondary" 
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    variant="primary"
                    disabled={loading}
                  >
                    {loading ? <Loader size="sm" /> : 'Save Changes'}
                  </Button>
                </div>
              )}
            </form>
          </div>
        </Card>
      </div>

      {/* Document Management Section */}
      <Card className="mt-8">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Document Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Uploaded Documents</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span>ID Proof.pdf</span>
                  <Button size="sm" variant="link">View</Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span>Income Certificate.pdf</span>
                  <Button size="sm" variant="link">View</Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span>Address Proof.pdf</span>
                  <Button size="sm" variant="link">View</Button>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Upload New Documents</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Document Type
                  </label>
                  <select 
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select document type</option>
                    <option value="id">ID Proof</option>
                    <option value="income">Income Proof</option>
                    <option value="address">Address Proof</option>
                    <option value="bank">Bank Statement</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload File
                  </label>
                  <input 
                    type="file" 
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                  />
                </div>
                
                <div className="flex items-center gap-2">
                  <Progress value={0} max={100} className="flex-1" />
                  <span className="text-sm">0%</span>
                </div>
                
                <Button variant="primary" className="w-full">
                  Upload Document
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}