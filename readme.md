# Fundus mobile frontend
## How to install
- Install node modules
```npm i```
# Before ejection
## How to run
- ```npm start```
## How to test
- ```npm run test:coverage```
## How to fix lint and format with prettier
- ```npm run code:clean```
# After ejection
## How to Run
### Run instructions for Android:
  - create a ```local.properties``` file in android folder
    - change current directory to android folder
      - ```cd android```
    - create new file "local.properties"
      - ```touch local.properties```
    - open file and key in the sdk path
      - ```sdk.dir=/Users/{username}/Library/Android/sdk```
  - Open and run Android emulator manually
  - Run android app
    ```cd "/path/to/fundus" && npx react-native run-android```
### Run instructions for iOS:
  - ensure xcode is the latest version
  - method 1
    ```cd "/path/to/fundus" && npx react-native run-ios```
  - method 2
    - Open fundus/ios/fundus.xcworkspace in Xcode or run ```xed -b ios```
    - Hit the Run button
### Run instructions for macOS:
  - See https://aka.ms/ReactNativeGuideMacOS for the latest up-to-date instructions.
