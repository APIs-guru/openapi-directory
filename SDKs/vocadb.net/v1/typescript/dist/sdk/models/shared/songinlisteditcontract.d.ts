import { SpeakeasyBase } from "../../../internal/utils";
import { SongForApiContractInput } from "./songforapicontract";
export declare class SongInListEditContractInput extends SpeakeasyBase {
    notes?: string;
    order?: number;
    song?: SongForApiContractInput;
    songInListId?: number;
}
