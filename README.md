# react-native-boilerplate

### run
```
npm install

react-native run-ios
```

### rename React Native project's name
Change the name attribute in package.json, run
```
react-native upgrade
```
, and just let react overwrite the android/ios files.

Then change your Appregistry line from
```
AppRegistry.registerComponent('ReactNativeBoilerplate', () => ReactNativeBoilerplate)
```
To:
```
AppRegistry.registerComponent('YourProjectName', () => YourProjectName)
```
