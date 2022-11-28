import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The tags' tagged item
**/
export declare class TagTagTaggedItem extends SpeakeasyBase {
    atHref?: string;
    atRel?: string;
    atTitle?: string;
}
export declare class TagTag extends SpeakeasyBase {
    created?: Date;
    taggedItem?: TagTagTaggedItem;
    text?: string;
}
export declare class Tag extends SpeakeasyBase {
    tag?: TagTag;
}
