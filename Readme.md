## Voting App

### Steps:
-   npm init
-   npm i express
-   npm i mongoose
    create a User Model in models folder

## Planning
### What to do ?
-   Models
-   Routes

### Voting app Functionality

1.  user sign in / sign up
2.  see the list of candidate
3.  vote one time of the candidate
4.  there is a route shows the list of candidate and their live vote count sorted by vote count
5. unique data must contain thier one unique govt id proof named aadhar
6. list of eligible voters: manage by admin (not eligible to vote)
7. user can change their password
8. user can login only with aadhar card number and password.

--------------------------------------

### Route
User Authentication:
    /signup: POST - create a new user account ✔️
    /login :POST - log in to an existing account ( aadhar + password) ✔️

Voting
    /candidate :GET - get the listof candidates✔️
    /vote/:candidate; POST - vote for a specific candidate.✔️

Vote Count:
    /vote/counts :GET - get the list of a candidate sorted by the vote count ✔️

User Profile:
    /profile: GET - Get the user'sprofile information ✔️
    /profile/password :PUT - change the user's password ✔️

Admin candidate Management:
    /candidate :post =create a new candidate.✔️
    /candidate?:candidate:PUT - update an existing candidate .✔️
    /candidate/:candidateId:DELETE - Delete a candidate from the list  ✔️