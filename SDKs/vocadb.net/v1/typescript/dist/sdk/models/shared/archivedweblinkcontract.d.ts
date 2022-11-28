import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ArchivedWebLinkContractCategoryEnum {
    Official = "Official",
    Commercial = "Commercial",
    Reference = "Reference",
    Other = "Other"
}
export declare class ArchivedWebLinkContract extends SpeakeasyBase {
    category?: ArchivedWebLinkContractCategoryEnum;
    description?: string;
    disabled?: boolean;
    url?: string;
}
