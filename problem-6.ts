{
  //

  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };



const updateProfile = (profile: Profile, updates: Partial<Profile>) => {
    const updated =  {...profile, ...updates}
    return updated; 
}

console.log(updateProfile(myProfile, {age: 89}));


  ////Solved

  //
}
