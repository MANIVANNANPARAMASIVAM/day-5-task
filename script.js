//Question 1 : For the given JSON iterate overall for loops (for,for in, for of, for each)

const jsonData =[
    {
        "name":"manivannan",
        "age":"24",
        "city":"salem",
    },
    {
        "name":"sriram",
        "age":"24",
        "city":"coimbatore",
    },
    {
        "name":"vasanth",
        "age":"22",
        "city":"chennai"
    },
    {
        "name":"tharun",
        "age":"25",
        "city":"thiruvannamali"
    },
    {
        "name":"vijay",
        "age":"23",
        "city":"hosur"
    }
]
//using for loop
console.log(jsonData);
console.log("using for in loop");
for(let i =0;i<jsonData.length;i++){
    console.log(jsonData[i].name,jsonData[i].age,jsonData[i].city);
}

//using for in loop
console.log("using for in loop");
for(let index in jsonData){
    console.log(jsonData[index].name,jsonData[index].city,jsonData[index].age);
}

//using for of loop
console.log("using for of loop");
for(let obj of jsonData){
    console.log(obj.age,obj.name,obj.city);
}

//Question 2 : Create your own resume data in JSON format

const resume={
    "Name":"MANIVANNAN PARAMASIVAM",
    "Age":"24",
    "City":"SALEM",
    "Education":{
        "10th standard":{
            "school":"SSLC",
            "percentage":"87%"
        },
        "12 standard":{
            "school":"HSC",
            "percentage":"50%"
        },
        "degree":{
            "course":"B.E - ELECTRONIC AND COMMUNICATION",
            "college": "VINAYAKA MISSION",
            "CGPA":"7.68"
        }
    },
    "Skills":["C","Java","JavaScript","SQL"],
    "Interest":["Sports","Travelling"],
    "Certifications":{
        "certificate1":{
            "cname":"C Programming",
        },
        
    },
}
console.log(resume);
