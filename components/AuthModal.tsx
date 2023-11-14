"use client"

import { useSupabaseClient } from "@supabase/auth-helpers-react"

import { Modal } from "./Modal"

export const AuthModal = () => {
  const supabaseClient = useSupabaseClient()

  return (
    <Modal
      title="welcome back"
      description="sign in to your account to continue"
      isOpen
      onChange={() => {}}
    >
      <div className="flex flex-col gap-y-4">
        <button className="btn btn-primary">sign in with github</button>
        <button className="btn btn-secondary">sign in with google</button>
        <button className="btn btn-tertiary">sign in with twitter</button>
      </div>
    </Modal>
  )
}