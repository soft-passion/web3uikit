export interface AvatarProps {}

export type Theme = 'image' | 'letters';

export interface AvatarProps {
    /**
     * The layout for the user
     */
    theme: Theme;

    /**
     * you can set rounded edge to display the avatar in a circle
     */
    isRounded?: boolean;

    /**
     * pass two letters, like the users initials, BG for example
     */
    text?: string;

    /**
     * pass a valid url for an image
     */
    image?: string;

    /**
     * Avatar Background, if not specified we will generate random color
     */
    avatarBackground?: string;

    /**
     * Text Color of avatar
     */
    textColor?: string;

    /**
     * Border Radius of avatar
     */
    borderRadius?: number;

    /**
     * Font size of text within the avatar
     */
    fontSize?: number;

    /**
     * Size of the avatar
     */
    size?: number;
}
