/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      phoneNumber
      name
      profilePictureURL
      photos {
        items {
          id
          userId
          photoId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      events
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      phoneNumber
      name
      profilePictureURL
      photos {
        items {
          id
          userId
          photoId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      events
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      phoneNumber
      name
      profilePictureURL
      photos {
        items {
          id
          userId
          photoId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      events
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPhoto = /* GraphQL */ `
  mutation CreatePhoto(
    $input: CreatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    createPhoto(input: $input, condition: $condition) {
      id
      eventID
      users {
        items {
          id
          userId
          photoId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      full_res_url
      compressed_url
      description
      isUserFace
      hasUnidentifiedFaces
      isPublic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePhoto = /* GraphQL */ `
  mutation UpdatePhoto(
    $input: UpdatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    updatePhoto(input: $input, condition: $condition) {
      id
      eventID
      users {
        items {
          id
          userId
          photoId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      full_res_url
      compressed_url
      description
      isUserFace
      hasUnidentifiedFaces
      isPublic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePhoto = /* GraphQL */ `
  mutation DeletePhoto(
    $input: DeletePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    deletePhoto(input: $input, condition: $condition) {
      id
      eventID
      users {
        items {
          id
          userId
          photoId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      full_res_url
      compressed_url
      description
      isUserFace
      hasUnidentifiedFaces
      isPublic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      host
      name
      date
      photographer
      photos
      location
      description
      guests
      isPublic
      isPublished
      isArchived
      isDeleted
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      host
      name
      date
      photographer
      photos
      location
      description
      guests
      isPublic
      isPublished
      isArchived
      isDeleted
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      host
      name
      date
      photographer
      photos
      location
      description
      guests
      isPublic
      isPublished
      isArchived
      isDeleted
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUserPhoto = /* GraphQL */ `
  mutation CreateUserPhoto(
    $input: CreateUserPhotoInput!
    $condition: ModelUserPhotoConditionInput
  ) {
    createUserPhoto(input: $input, condition: $condition) {
      id
      userId
      photoId
      user {
        id
        phoneNumber
        name
        profilePictureURL
        photos {
          nextToken
          __typename
        }
        events
        createdAt
        updatedAt
        __typename
      }
      photo {
        id
        eventID
        users {
          nextToken
          __typename
        }
        full_res_url
        compressed_url
        description
        isUserFace
        hasUnidentifiedFaces
        isPublic
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUserPhoto = /* GraphQL */ `
  mutation UpdateUserPhoto(
    $input: UpdateUserPhotoInput!
    $condition: ModelUserPhotoConditionInput
  ) {
    updateUserPhoto(input: $input, condition: $condition) {
      id
      userId
      photoId
      user {
        id
        phoneNumber
        name
        profilePictureURL
        photos {
          nextToken
          __typename
        }
        events
        createdAt
        updatedAt
        __typename
      }
      photo {
        id
        eventID
        users {
          nextToken
          __typename
        }
        full_res_url
        compressed_url
        description
        isUserFace
        hasUnidentifiedFaces
        isPublic
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUserPhoto = /* GraphQL */ `
  mutation DeleteUserPhoto(
    $input: DeleteUserPhotoInput!
    $condition: ModelUserPhotoConditionInput
  ) {
    deleteUserPhoto(input: $input, condition: $condition) {
      id
      userId
      photoId
      user {
        id
        phoneNumber
        name
        profilePictureURL
        photos {
          nextToken
          __typename
        }
        events
        createdAt
        updatedAt
        __typename
      }
      photo {
        id
        eventID
        users {
          nextToken
          __typename
        }
        full_res_url
        compressed_url
        description
        isUserFace
        hasUnidentifiedFaces
        isPublic
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
