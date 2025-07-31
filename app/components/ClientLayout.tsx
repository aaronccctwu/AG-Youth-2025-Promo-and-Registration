import DifyClientWrapper from '../../components/dify-client-widget'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div className="fixed bottom-4 right-4 z-50">
        <DifyClientWrapper />
      </div>
    </>
  )
}