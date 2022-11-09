import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import siteConfig from './slices/siteConfig'

export * as Actions from './slices'

export const Store = configureStore({
	reducer: {
		siteConfiguration: siteConfig,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof Store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof Store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;