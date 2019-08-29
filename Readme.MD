#   Parking Application

## Parking User Signup and Slot Assign Application in Node js 

## add User pakring  POST Api
  

#### URL For access 


api/parking/slot/signup


#### Json Fromat


{
	"student" :
	{
		"name" : "gulshan Islam",
		"email":"5d63c3c778ecb748b0f1a9f4",
		"phone":"+92 335 3443510",
		"user_type":1
	}
}


## add Slot pakring  POST Api
  

#### URL For access 


api/parking/slot/add


#### Json Fromat


{
	"parkingslots" :
	{
		"SlotCode" : "AEF2039",
		"SlotName":"Flot a 2"
	}
}


## add Slot assign  pakring  POST Api
  

#### URL For access 


api/parking/slot/assign


#### Json Fromat


{
	"assignslots" :
	{
		"PSId" : "5d64039fdc43072d4c0b50c2",
		"SID":"5d63e28516bceb3a082774a0"
	}
}





#   Project Student and Course RelationShip

## Student, Course and Enrollment application 

## add Student POST Api
  

#### URL For access 


api/student/add


#### Json Fromat


{
	"student" :
	{
		"studentName" : "Gulshan Islam",
		"phone" : "+92 333 3353443510"
	}
}


## Course Section 

### add Course POST Api
  

#### URL For access 

api/course/add


#### Json Fromat


{
	"course" : {
		"CourseCode" : "Ae3940",
		"CourseName" : "Node js"
	}
}


## Enrollment Section 

### add Enrollment POST Api
  
#### URL For access 

api/enrollement/add

#### Json Fromat


{
	"enrollment" : {
		"StuId" : "5d63c2dd0d6d130e1830b07d",
		"CId" : "5d63c3c778ecb748b0f1a9f4"
	}
}

## SESSION 8/26/2019

## adding compose key and date entry on node and mongooes side  pakring  POST Api
  

#### URL For access 


api/parking/slot/assign


#### Json Fromat


{
	"assignslots" :
	{
		"PSId" : "5d64039fdc43072d4c0b50c2",
		"SID":"5d63e28516bceb3a082774a0"
	}
}


## SESSION 8/27/2019

## adding password hash method   POST Api
  

#### URL For access 


api/parking/slot/signup


#### Json Fromat


{
	"parkingslot_users" :
	{
		{
		"name":"gulshan isalm",
		"email" : "gulshs@yopmail.com",
		"phone" : "0092 335 3443510 ",
		"user_type": 2,
		"password": "abc123"
		}
	}
}



## Assigment

## Compare password with mongoes Schema POST Api
  

#### URL For access 


api/parking/slot/login


#### Json Fromat


{
	"parkingslot_user" :
	{ 
		{
			
			"email": "gulsh3@yopmail.com",
			"password":"abcsa123"
		}
		
	}
}







