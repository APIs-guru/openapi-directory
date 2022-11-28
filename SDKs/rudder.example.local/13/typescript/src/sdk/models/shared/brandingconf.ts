import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { Logo } from "./logo";



export class BrandingConf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=barColor" })
  barColor: Color;

  @SpeakeasyMetadata({ data: "json, name=displayBar" })
  displayBar: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayBarLogin" })
  displayBarLogin: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayLabel" })
  displayLabel: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayMotd" })
  displayMotd: boolean;

  @SpeakeasyMetadata({ data: "json, name=labelColor" })
  labelColor: Color;

  @SpeakeasyMetadata({ data: "json, name=labelText" })
  labelText: string;

  @SpeakeasyMetadata({ data: "json, name=motd" })
  motd: string;

  @SpeakeasyMetadata({ data: "json, name=smallLogo" })
  smallLogo: Logo;

  @SpeakeasyMetadata({ data: "json, name=wideLogo" })
  wideLogo: Logo;
}
