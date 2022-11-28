import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WebLinkContractCategoryEnum {
    Official = "Official",
    Commercial = "Commercial",
    Reference = "Reference",
    Other = "Other"
}
export declare class WebLinkContract extends SpeakeasyBase {
    category?: WebLinkContractCategoryEnum;
    description?: string;
    descriptionOrUrl?: string;
    disabled?: boolean;
    id?: number;
    url?: string;
}
