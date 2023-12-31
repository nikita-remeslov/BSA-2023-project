import { CustomButton } from '~/bundles/common/components/components.js';

type Properties = {
    onSubmit: () => void;
};

const SignInForm: React.FC<Properties> = () => (
    <>
        <h1>Sign In</h1>
        <form>
            <CustomButton label="Sign in" />
        </form>
    </>
);

export { SignInForm };
