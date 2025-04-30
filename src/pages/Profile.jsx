import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '../components/common/Card';
import { Button } from '../components/common/Button';
//import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Avatar } from '../components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/common/tabs';
import { toast } from '../components/ui/use-toast';

export function Profile() {
  const { user, updateUserProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
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
    try {
      // Call API to update profile
      await updateUserProfile(profileData);
      setIsEditing(false);
      toast({
        title: "Profile Updated",
        description: "Your profile information has been successfully updated.",
        variant: "success",
      });
    } catch (error) {
      toast({
        title: "Update Failed",
        description: error.message || "There was an error updating your profile.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Profile Summary Card */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Profile Summary</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Avatar className="w-24 h-24 mb-4">
              <span className="text-2xl font-bold">
                {profileData.firstName && profileData.lastName 
                  ? `${profileData.firstName[0]}${profileData.lastName[0]}`
                  : 'U'}
              </span>
            </Avatar>
            <h2 className="text-xl font-semibold mb-1">
              {profileData.firstName} {profileData.lastName}
            </h2>
            <p className="text-gray-500 mb-4">{profileData.email}</p>
            <div className="w-full mt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-500">Membership Status</span>
                <span className="font-medium">Active</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-500">Member Since</span>
                <span className="font-medium">Jan 2023</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Credit Score</span>
                <span className="font-medium">Good</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Details */}
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Profile Details</CardTitle>
              {!isEditing && (
                <Button 
                  variant="outline" 
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="personal">
              <TabsList className="mb-4">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="contact">Contact Details</TabsTrigger>
                <TabsTrigger value="financial">Financial Info</TabsTrigger>
              </TabsList>

              <form onSubmit={handleSubmit}>
                <TabsContent value="personal">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={profileData.firstName}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={profileData.lastName}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={profileData.email}
                        onChange={handleChange}
                        disabled={true} // Email usually can't be changed easily
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={profileData.phone}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="contact">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input
                        id="address"
                        name="address"
                        value={profileData.address}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={profileData.city}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="region">Region</Label>
                      <Input
                        id="region"
                        name="region"
                        value={profileData.region}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="ward">Ward</Label>
                      <Input
                        id="ward"
                        name="ward"
                        value={profileData.ward}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="financial">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="occupation">Occupation</Label>
                      <Input
                        id="occupation"
                        name="occupation"
                        value={profileData.occupation}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="monthlyIncome">Monthly Income</Label>
                      <Input
                        id="monthlyIncome"
                        name="monthlyIncome"
                        value={profileData.monthlyIncome}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </TabsContent>

                {isEditing && (
                  <div className="flex justify-end gap-2 mt-6">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">Save Changes</Button>
                  </div>
                )}
              </form>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Loan History/Documents Section */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Document Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Uploaded Documents</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span>ID Proof.pdf</span>
                  <Button size="sm" variant="ghost">View</Button>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span>Income Certificate.pdf</span>
                  <Button size="sm" variant="ghost">View</Button>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span>Address Proof.pdf</span>
                  <Button size="sm" variant="ghost">View</Button>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Upload New Documents</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="documentType">Document Type</Label>
                  <select 
                    id="documentType" 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                  >
                    <option value="">Select document type</option>
                    <option value="id">ID Proof</option>
                    <option value="income">Income Proof</option>
                    <option value="address">Address Proof</option>
                    <option value="bank">Bank Statement</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="fileUpload">Upload File</Label>
                  <Input 
                    id="fileUpload" 
                    type="file" 
                    className="mt-1" 
                  />
                </div>
                
                <Button className="w-full">Upload Document</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}