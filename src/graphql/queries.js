/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getPhoto = /* GraphQL */ `
  query GetPhoto($id: ID!) {
    getPhoto(id: $id) {
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
export const listPhotos = /* GraphQL */ `
  query ListPhotos(
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUserPhoto = /* GraphQL */ `
  query GetUserPhoto($id: ID!) {
    getUserPhoto(id: $id) {
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
export const listUserPhotos = /* GraphQL */ `
  query ListUserPhotos(
    $filter: ModelUserPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        photoId
        user {
          id
          phoneNumber
          name
          profilePictureURL
          events
          createdAt
          updatedAt
          __typename
        }
        photo {
          id
          eventID
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
      nextToken
      __typename
    }
  }
`;
export const userPhotosByUserId = /* GraphQL */ `
  query UserPhotosByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userPhotosByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        photoId
        user {
          id
          phoneNumber
          name
          profilePictureURL
          events
          createdAt
          updatedAt
          __typename
        }
        photo {
          id
          eventID
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
      nextToken
      __typename
    }
  }
`;
export const userPhotosByPhotoId = /* GraphQL */ `
  query UserPhotosByPhotoId(
    $photoId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userPhotosByPhotoId(
      photoId: $photoId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        photoId
        user {
          id
          phoneNumber
          name
          profilePictureURL
          events
          createdAt
          updatedAt
          __typename
        }
        photo {
          id
          eventID
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
      nextToken
      __typename
    }
  }
`;
