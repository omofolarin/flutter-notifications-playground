# notifications_playground

A new Flutter project.

## Getting Started

This project is a starting point for a Flutter application.

A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://docs.flutter.dev/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://docs.flutter.dev/cookbook)

For help getting started with Flutter development, view the
[online documentation](https://docs.flutter.dev/), which offers tutorials,
samples, guidance on mobile development, and a full API reference.

minSdkVersion
 
- [Firebase project installation](https://console.firebase.google.com/u/0/project/<project_name>/overview)
  - add to your local.properties
     ```
      flutter.minSdkVersion=21
      flutter.compileSdkVersion=33
    ```
  - add app/build.gradle
    ```
    minSdkVersion localProperties.getProperty('flutter.minSdkVersion').toInteger()
    ```
    

[Receiving firebase messages](https://firebase.google.com/docs/cloud-messaging/flutter/receive)