import { SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { Logo } from "./logo";
export declare class BrandingConf extends SpeakeasyBase {
    barColor: Color;
    displayBar: boolean;
    displayBarLogin: boolean;
    displayLabel: boolean;
    displayMotd: boolean;
    labelColor: Color;
    labelText: string;
    motd: string;
    smallLogo: Logo;
    wideLogo: Logo;
}
