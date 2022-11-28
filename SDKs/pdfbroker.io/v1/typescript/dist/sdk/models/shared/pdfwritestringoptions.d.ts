import { SpeakeasyBase } from "../../../internal/utils";
import { FontDtoInput } from "./fontdto";
/**
 * Options for writing string in pdf page;
**/
export declare class PdfWriteStringOptionsInput extends SpeakeasyBase {
    font?: FontDtoInput;
    pageNumber?: number;
    text?: string;
    xOrigin?: number;
    xPosition?: number;
    yOrigin?: number;
    yPosition?: number;
}
