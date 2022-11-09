import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EmbedSettingsButtons
/** 
 * A collection of information about the buttons that appear on the interface of the embeddable player.
**/
export class EmbedSettingsButtons extends SpeakeasyBase {
  @Metadata({ data: "json, name=embed" })
  embed: boolean;

  @Metadata({ data: "json, name=fullscreen" })
  fullscreen: boolean;

  @Metadata({ data: "json, name=hd" })
  hd: boolean;

  @Metadata({ data: "json, name=like" })
  like: boolean;

  @Metadata({ data: "json, name=scaling" })
  scaling: boolean;

  @Metadata({ data: "json, name=share" })
  share: boolean;

  @Metadata({ data: "json, name=watchlater" })
  watchlater: boolean;
}


// EmbedSettingsLogosCustom
/** 
 * A collection of information relating to custom logos in the embeddable player.
**/
export class EmbedSettingsLogosCustom extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active: boolean;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=sticky" })
  sticky: boolean;
}


// EmbedSettingsLogos
/** 
 * A collection of information about the logo in the corner of the embeddable player.
**/
export class EmbedSettingsLogos extends SpeakeasyBase {
  @Metadata({ data: "json, name=custom" })
  custom: EmbedSettingsLogosCustom;

  @Metadata({ data: "json, name=vimeo" })
  vimeo: boolean;
}

export enum EmbedSettingsTitleNameEnum {
    Hide = "hide"
,    Show = "show"
,    User = "user"
}

export enum EmbedSettingsTitleOwnerEnum {
    Hide = "hide"
,    Show = "show"
,    User = "user"
}

export enum EmbedSettingsTitlePortraitEnum {
    Hide = "hide"
,    Show = "show"
,    User = "user"
}


// EmbedSettingsTitle
/** 
 * A collection of information relating to the embeddable player's title bar.
**/
export class EmbedSettingsTitle extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: EmbedSettingsTitleNameEnum;

  @Metadata({ data: "json, name=owner" })
  owner: EmbedSettingsTitleOwnerEnum;

  @Metadata({ data: "json, name=portrait" })
  portrait: EmbedSettingsTitlePortraitEnum;
}


export class EmbedSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=buttons" })
  buttons: EmbedSettingsButtons;

  @Metadata({ data: "json, name=color" })
  color: string;

  @Metadata({ data: "json, name=logos" })
  logos: EmbedSettingsLogos;

  @Metadata({ data: "json, name=playbar" })
  playbar: boolean;

  @Metadata({ data: "json, name=speed" })
  speed: boolean;

  @Metadata({ data: "json, name=title" })
  title: EmbedSettingsTitle;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=volume" })
  volume: boolean;
}
