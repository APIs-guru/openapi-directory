import { SpeakeasyBase } from "../../../internal/utils";
export declare class TagWikisLastBodyEditorBadgeCounts extends SpeakeasyBase {
    bronze?: number;
    gold?: number;
    silver?: number;
}
export declare class TagWikisLastBodyEditor extends SpeakeasyBase {
    acceptRate?: number;
    badgeCounts?: TagWikisLastBodyEditorBadgeCounts;
    displayName?: string;
    link?: string;
    profileImage?: string;
    reputation?: number;
    userId?: number;
    userType?: string;
}
export declare class TagWikisLastExcerptEditorBadgeCounts extends SpeakeasyBase {
    bronze?: number;
    gold?: number;
    silver?: number;
}
export declare class TagWikisLastExcerptEditor extends SpeakeasyBase {
    acceptRate?: number;
    badgeCounts?: TagWikisLastExcerptEditorBadgeCounts;
    displayName?: string;
    link?: string;
    profileImage?: string;
    reputation?: number;
    userId?: number;
    userType?: string;
}
export declare class TagWikis extends SpeakeasyBase {
    body?: string;
    bodyLastEditDate?: number;
    excerpt?: string;
    excerptLastEditDate?: number;
    lastBodyEditor?: TagWikisLastBodyEditor;
    lastExcerptEditor?: TagWikisLastExcerptEditor;
    tagName?: string;
}
