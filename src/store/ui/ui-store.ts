import { create } from 'zustand'

interface Props {
    isSideMenuOpen: boolean
    oppenSideMenu: () => void
    closeSideMenu: () => void
}

export const useUIStore = create<Props>()((set) => ({
    isSideMenuOpen: false,
    oppenSideMenu: () => set({ isSideMenuOpen: true }),
    closeSideMenu: () => set({ isSideMenuOpen: false }),
}))