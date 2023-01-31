import { Alert, AlertTitle} from '@mui/material'


export const WarningComponent = () => {
    return (
        <>    
        <Alert severity = 'warning'>
        <AlertTitle>Warning</AlertTitle>
            Please set the window width and height in 1600x1963 and refresh. — <strong>Thank you.</strong>
        </Alert>
    
    </>
  )
}
