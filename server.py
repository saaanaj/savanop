# import json
# import os


# FILE_NAME = "contact.json"

# # file se data load karna
# def load_contacts():
#     if os.path.exists(FILE_NAME):
#         with open(FILE_NAME, "r") as f:
#             return json.load(f)
#     return {}

# # file me data save karna
# def save_contacts(contact):
#     with open(FILE_NAME, "w") as f:
#         json.dump(contact, f, indent=4)

# # naya contact add karna
# def add_contact(contact):
#     name = input("Enter name: ")
#     phone = input("Enter phone: ")
#     email = input("Enter email: ")
#     contact[name] = {"phone": phone, "email": email}
#     print("Contact added successfully!")

# # sab contacts dekhna
# def view_contacts(contact):
#     if not contact:
#         print("No contacts found.")
#     else:
#         for name, info in contact.items():
#             print(f"Name: {name}, Phone: {info['phone']}, Email: {info['email']}")

# # search karna
# def search_contact(contact):
#     search = input("Enter name to search: ")
#     if search in contact:
#         print(contact[search])
#     else:
#         print("Not found")

# # delete karna
# def delete_contact(contact):
#     delete = input("Enter name to delete: ")
#     if delete in contact:
#         del contact[delete]
#         print("Contact deleted successfully!")
#     else:
#         print("Not found, delete nahi hua")

# # main function
# def main():
#     contact = load_contacts()

#     while True:
#         print("\n--- Contact Book ---")
#         print("1. Add Contact")
#         print("2. View Contacts")
#         print("3. Search Contact")
#         print("4. Delete Contact")
#         print("5. Exit")

#         choice = input("Enter your choice: ")

#         if choice == "1":
#             add_contact(contact)
#         elif choice == "2":
#             view_contacts(contact)
#         elif choice == "3":
#             search_contact(contact)
#         elif choice == "4":
#             delete_contact(contact)
#         elif choice == "5":
#             save_contacts(contact)
#             print("Data saved. Exiting...")
#             break
#         else:
#             print("Invalid choice! Please try again.")

# if __name__ == "__main__":
#     main()

# from datetime  import datetime
# import time
# while True:
#     k = datetime.now()
#     hours = k.hour
#     mint = k.minute
#     scd = k.second

#     yourstime = (f"this is your hours{hours} this is your minute {mint} this is your second {scd}")

#     print(yourstime)
#     time.sleep(1.9 )

# import random

# #quiz game 

# quiz = [
    
#     {
#         "question": "Python me timeit module ka use kya hai?",
#         "options": [
#             "1. Code ka execution time measure karne ke liye",
#             "2. Real time clock",
#             "3. Alarm set karne ke liye",
#             "4. Thread sleep karne ke liye"
#         ],
#         "answer": "1"
#     },
#     {
#         "question": "Python me __all__ variable module me kis liye hota hai?",
#         "options": [
#             "1. Public API define karne ke liye",
#             "2. Memory allocate karne ke liye",
#             "3. Error handle karne ke liye",
#             "4. Logging"
#         ],
#         "answer": "1"
#     },
#     {
#         "question": "Python me del statement kis liye hota hai?",
#         "options": [
#             "1. Object delete karne ke liye",
#             "2. Memory increase karne ke liye",
#             "3. Error raise karne ke liye",
#             "4. Loop break karne ke liye"
#         ],
#         "answer": "1"
#     },
#     {
#         "question": "Python me sys.getsizeof() function kya return karta hai?",
#         "options": [
#             "1. Object ka size (bytes me)",
#             "2. List length",
#             "3. File size",
#             "4. String length"
#         ],
#         "answer": "1"
#     },
#     {
#         "question": "Python me logging module ka default level kya hai?",
#         "options": ["1. WARNING", "2. ERROR", "3. DEBUG", "4. INFO"],
#         "answer": "1"
#     },
#     {
#         "question": "Python me memory leak avoid karne ke liye kaunsa module useful hai?",
#         "options": ["1. weakref", "2. gc", "3. memoryview", "4. sabhi"],
#         "answer": "4"
#     },
#     {
#         "question": "Python me __call__ method ka use kis liye hota hai?",
#         "options": [
#             "1. Object ko function ki tarah callable banana",
#             "2. Function call karna",
#             "3. Thread start karna",
#             "4. Error raise karna"
#         ],
#         "answer": "1"
#     },
#     {
#         "question": "Python me enumerate() function kya return karta hai?",
#         "options": [
#             "1. Index ke sath iterable",
#             "2. Sirf index",
#             "3. Sirf values",
#             "4. Random values"
#         ],
#         "answer": "1"
#     },
#     {
#         "question": "Python me zip() function kya karta hai?",
#         "options": [
#             "1. Multiple iterables ko tuple pairs me combine karta hai",
#             "2. Files compress karta hai",
#             "3. String join karta hai",
#             "4. Random shuffle karta hai"
#         ],
#         "answer": "1"
#     },
#     {
#         "question": "Python me assert statement kis liye hota hai?",
#         "options": [
#             "1. Condition test karne ke liye",
#             "2. Loop break karne ke liye",
#             "3. Memory allocate karne ke liye",
#             "4. Logging"
#         ],
#         "answer": "1"
#     }
# ]

# import random

# print("\n--- Welcome to Quiz Game ---")
# score = 0

# rnd = random.randint(0, len(quiz) - 1)
# q = quiz[rnd]

# # print(q)
# print(q["question"])
# for opt in q["options"]:
#     print(opt)

# ans = input("Enter your choice (1-4): ")
# if ans == q["answer"]:
#     print("✅ Correct!\n")
#     score += 1
# else:
#     print("❌ Wrong Answer. Correct is:", q["answer"], "\n")

# print(f"Your final score: {score}/1")


# voting app
# k = int(input("enter your age"))

# if k >= 18:
#     print(f"congrulation u are eligible for election {k} ")
# else:
#     print(f"land de le tu vote abhee jhath 5 saal kaa hain {k}")


# def start():
#     k = int(input("enter your date"))

#     match k:
#         case 1:
#             print(f"You entered  {k} → Today is Monday")
#         case 2:
#             print(f"You entered {k} Today is Tuesday")
#         case 3:
#             print(f"You entered {k} Today is Wednesday")
#         case 4:
#             print(f"You entered {k} Today is Thursday")
#         case 5:
#             print(f"You entered {k} Today is Friday")
#         case 6:
#             print(f"You entered {k} Today is Saturday")
#         case 7:
#             print(f"You entered {k} Today is Sunday")
#         case _:
#             print(f"Invalid choice! {k} Please enter a number between 1-7")

# while True:
#     start()

# students = [
#     {"name": "Manish", "rollno": 1, "math": 50, "science": 45, "english": 55, "passed": True},
#     {"name": "Rupesh", "rollno": 2, "math": 30, "science": 40, "english": 25, "passed": False},
#     {"name": "Neha", "rollno": 3, "math": 65, "science": 70, "english": 60, "passed": True},
#     {"name": "Amit", "rollno": 4, "math": 20, "science": 35, "english": 40, "passed": False}
# ]


# def data(rollnumber):
#     found = False
#     for stfu in students:
#         if stfu["rollno"] == rollnumber:
#             print(f"""
#             Name     : {stfu["name"]}
#             Roll No  : {stfu['rollno']}
#             Math     : {stfu['math']}
#             Science  : {stfu['science']}
#             English  : {stfu['english']}
#             Passed   : {stfu['passed']}
#             """)
#             found = True
#             break  # sirf match milne par loop rukega
    
#     if not found:
#         print(f"⚠️ Roll number {rollnumber} not found")


# while True:
#     ink = input("Enter your roll number (or 'exit' to quit): ").strip()
#     if ink.lower() == "exit":
#         break
#     elif ink == "":
#         print("⚠️ Please enter roll number")
#     elif ink.isdigit():
#         pres = int(ink)
#         data(pres)
#     else:
#         print("⚠️ Please enter your roll number correctly")


# def kumar(mohan , rohan):
#     print(mohan + rohan )

# k = input("enter your roll number")
# l = input("enter your roll number")
# kumar(k , l)

# server.py# server.py
# server.py

# server.py
# server.py


import requests

# url = "https://api.freeapi.app/api/v1/public/randomusers"

# try:
#     respon = requests.get(url)
#     kyt = respon.json()
#     if kyt["statusCode"] == 200:
#         print("this code now working")
#         LET = kyt["data"]["page"]
#         sey = kyt["data"]["data"][0]

#         newyt = {
#           "gender" : sey["gender"] ,
#           "title": sey["name"]["title"],
#           "location" : sey["location"]["street"]["name"] ,
#           "city" : sey["location"]["coordinates"]["latitude"] ,
#           "email"  : sey["email"],
#           "login" : sey["login"]["username"] ,
#           "password" : sey["login"]["password"]
#         }

#         print(LET , newyt)
#     else:
#         print("i see error in the code")

# except requests.exceptions.RequestException as e:
#     print(f"this is error in your code {e}")


# ktr = requests.get(url2)

# uyr = ktr.json()

# kyty = json.dumps(uyr, indent=4)

# with open("output.txt" , "w") as f:
#     f.write(kyty)


import json

url2 = "https://api.freeapi.app/api/v1/kitchen-sink/http-methods/post"

kyt = {
    "name" : "saransh" ,
    "rollno" : 12
}

response = requests.post(
    url2 ,
    headers={"Content-Type": "application/json"} ,
    data=json.dumps(kyt)
)
print(f"Status Code: {response.status_code}")

# Response ko JSON ke form me pretty print
print("Response JSON:")
print(json.dumps(response.json(), indent=4))



