import { EntrySkeletonType, type EntryCollection, Entry } from 'contentful'

export const responseHandler = async <T, K>(
  apiCall: () => Promise<EntryCollection<EntrySkeletonType, undefined, string> | Entry<EntrySkeletonType, undefined, string>>
): Promise<
  | {
      data: T
      error?: never
    }
  | {
      error: K
      data?: never
    }
> => {
  try {
    const response = await apiCall()
    return {
      data: response as T,
    }
  } catch (error: any) {
    return {
      error: error.response.data,
    }
  }
}
