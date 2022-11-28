import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A collection of information about the buttons that appear on the interface of the embeddable player.
**/
export declare class EmbedSettingsButtons extends SpeakeasyBase {
    embed: boolean;
    fullscreen: boolean;
    hd: boolean;
    like: boolean;
    scaling: boolean;
    share: boolean;
    watchlater: boolean;
}
/**
 * A collection of information relating to custom logos in the embeddable player.
**/
export declare class EmbedSettingsLogosCustom extends SpeakeasyBase {
    active: boolean;
    link: string;
    sticky: boolean;
}
/**
 * A collection of information about the logo in the corner of the embeddable player.
**/
export declare class EmbedSettingsLogos extends SpeakeasyBase {
    custom: EmbedSettingsLogosCustom;
    vimeo: boolean;
}
export declare enum EmbedSettingsTitleNameEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}
export declare enum EmbedSettingsTitleOwnerEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}
export declare enum EmbedSettingsTitlePortraitEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}
/**
 * A collection of information relating to the embeddable player's title bar.
**/
export declare class EmbedSettingsTitle extends SpeakeasyBase {
    name: EmbedSettingsTitleNameEnum;
    owner: EmbedSettingsTitleOwnerEnum;
    portrait: EmbedSettingsTitlePortraitEnum;
}
export declare class EmbedSettings extends SpeakeasyBase {
    buttons: EmbedSettingsButtons;
    color: string;
    logos: EmbedSettingsLogos;
    playbar: boolean;
    speed: boolean;
    title: EmbedSettingsTitle;
    uri?: string;
    volume: boolean;
}
