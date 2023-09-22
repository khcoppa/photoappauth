/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreatePhoto = /* GraphQL */ `
  subscription OnCreatePhoto($filter: ModelSubscriptionPhotoFilterInput) {
    onCreatePhoto(filter: $filter) {
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
export const onUpdatePhoto = /* GraphQL */ `
  subscription OnUpdatePhoto($filter: ModelSubscriptionPhotoFilterInput) {
    onUpdatePhoto(filter: $filter) {
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
export const onDeletePhoto = /* GraphQL */ `
  subscription OnDeletePhoto($filter: ModelSubscriptionPhotoFilterInput) {
    onDeletePhoto(filter: $filter) {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
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
export const onCreateUserPhoto = /* GraphQL */ `
  subscription OnCreateUserPhoto(
    $filter: ModelSubscriptionUserPhotoFilterInput
  ) {
    onCreateUserPhoto(filter: $filter) {
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
export const onUpdateUserPhoto = /* GraphQL */ `
  subscription OnUpdateUserPhoto(
    $filter: ModelSubscriptionUserPhotoFilterInput
  ) {
    onUpdateUserPhoto(filter: $filter) {
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
export const onDeleteUserPhoto = /* GraphQL */ `
  subscription OnDeleteUserPhoto(
    $filter: ModelSubscriptionUserPhotoFilterInput
  ) {
    onDeleteUserPhoto(filter: $filter) {
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
