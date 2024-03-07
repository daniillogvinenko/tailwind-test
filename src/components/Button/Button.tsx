import classes from "./Button.module.scss";

interface ButtonProps {
    variant?: "fill" | "outline";
    iconBefore?: React.ReactNode;
    iconAfter?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

export const Button = (props: ButtonProps) => {
    const { children, variant = "fill", iconAfter, iconBefore, className } = props;

    return (
        <button className={classes[variant] + " " + className}>
            <div className="flex items-center">
                {iconBefore}
                <span className={`${iconBefore ? "ml-3" : ""} ${iconAfter ? "mr-3" : ""}`}>{children}</span>
                {iconAfter}
            </div>
        </button>
    );
};
