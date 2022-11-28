import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmbedSettingsButtons
/** 
 * A collection of information about the buttons that appear on the interface of the embeddable player.
**/
export class EmbedSettingsButtons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=embed" })
  embed: boolean;

  @SpeakeasyMetadata({ data: "json, name=fullscreen" })
  fullscreen: boolean;

  @SpeakeasyMetadata({ data: "json, name=hd" })
  hd: boolean;

  @SpeakeasyMetadata({ data: "json, name=like" })
  like: boolean;

  @SpeakeasyMetadata({ data: "json, name=scaling" })
  scaling: boolean;

  @SpeakeasyMetadata({ data: "json, name=share" })
  share: boolean;

  @SpeakeasyMetadata({ data: "json, name=watchlater" })
  watchlater: boolean;
}


// EmbedSettingsLogosCustom
/** 
 * A collection of information relating to custom logos in the embeddable player.
**/
export class EmbedSettingsLogosCustom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active: boolean;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=sticky" })
  sticky: boolean;
}


// EmbedSettingsLogos
/** 
 * A collection of information about the logo in the corner of the embeddable player.
**/
export class EmbedSettingsLogos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom" })
  custom: EmbedSettingsLogosCustom;

  @SpeakeasyMetadata({ data: "json, name=vimeo" })
  vimeo: boolean;
}

export enum EmbedSettingsTitleNameEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}

export enum EmbedSettingsTitleOwnerEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}

export enum EmbedSettingsTitlePortraitEnum {
    Hide = "hide",
    Show = "show",
    User = "user"
}


// EmbedSettingsTitle
/** 
 * A collection of information relating to the embeddable player's title bar.
**/
export class EmbedSettingsTitle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: EmbedSettingsTitleNameEnum;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner: EmbedSettingsTitleOwnerEnum;

  @SpeakeasyMetadata({ data: "json, name=portrait" })
  portrait: EmbedSettingsTitlePortraitEnum;
}


export class EmbedSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buttons" })
  buttons: EmbedSettingsButtons;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color: string;

  @SpeakeasyMetadata({ data: "json, name=logos" })
  logos: EmbedSettingsLogos;

  @SpeakeasyMetadata({ data: "json, name=playbar" })
  playbar: boolean;

  @SpeakeasyMetadata({ data: "json, name=speed" })
  speed: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: EmbedSettingsTitle;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=volume" })
  volume: boolean;
}
