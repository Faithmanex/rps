import requests
import random

computer = random.randint(1, 3)
selection = int(input("1. Rock\n2. Paper\n3. Scissors\n"))
result = ""

if selection == computer:
    result = "It's a tie!"
elif selection == 1 and computer == 3 or selection == 2 and computer == 1 or selection == 3 and computer == 2:
    result = "Congratulations! You win!"
else:
    result = "You lose. Better luck next time!"

print(result)
print("Computer chose", computer)
