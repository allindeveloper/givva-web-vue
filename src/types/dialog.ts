export type DialogActionProps = {
    submitDisabled?: boolean
    cancelDisabled?: boolean
    handleCancel?: (e: any) => void;
    handleSubmit?: (e: any) => void;
    submitText?: string;
    cancelText?: string;
    showSubmit?: boolean;
    showCancel?: boolean;
}