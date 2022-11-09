import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Color } from "./color";
import { Color } from "./color";
import { Logo } from "./logo";
import { Logo } from "./logo";


export class BrandingConf extends SpeakeasyBase {
  @Metadata({ data: "json, name=barColor" })
  barColor: Color;

  @Metadata({ data: "json, name=displayBar" })
  displayBar: boolean;

  @Metadata({ data: "json, name=displayBarLogin" })
  displayBarLogin: boolean;

  @Metadata({ data: "json, name=displayLabel" })
  displayLabel: boolean;

  @Metadata({ data: "json, name=displayMotd" })
  displayMotd: boolean;

  @Metadata({ data: "json, name=labelColor" })
  labelColor: Color;

  @Metadata({ data: "json, name=labelText" })
  labelText: string;

  @Metadata({ data: "json, name=motd" })
  motd: string;

  @Metadata({ data: "json, name=smallLogo" })
  smallLogo: Logo;

  @Metadata({ data: "json, name=wideLogo" })
  wideLogo: Logo;
}
