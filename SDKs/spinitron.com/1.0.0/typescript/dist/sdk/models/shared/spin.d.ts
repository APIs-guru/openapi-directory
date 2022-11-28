import { SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
export declare class SpinLinks extends SpeakeasyBase {
    playlist?: Link;
    self?: Link;
}
export declare class Spin extends SpeakeasyBase {
    links?: SpinLinks;
    artist?: string;
    artistCustom?: string;
    catalogNumber?: string;
    classical?: boolean;
    composer?: string;
    conductor?: string;
    duration?: number;
    end?: Date;
    ensemble?: string;
    genre?: string;
    id?: number;
    image?: string;
    isrc?: string;
    iswc?: string;
    label?: string;
    labelCustom?: string;
    local?: boolean;
    medium?: string;
    new?: boolean;
    note?: string;
    performers?: string;
    playlistId?: number;
    release?: string;
    releaseCustom?: string;
    released?: number;
    request?: boolean;
    song?: string;
    start?: Date;
    timezone?: string;
    upc?: string;
    va?: boolean;
    work?: string;
}
