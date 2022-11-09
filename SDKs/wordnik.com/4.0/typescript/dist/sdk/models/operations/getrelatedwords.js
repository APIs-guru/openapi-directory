var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var GetRelatedWordsPathParams = /** @class */ (function (_super) {
    __extends(GetRelatedWordsPathParams, _super);
    function GetRelatedWordsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=word" }),
        __metadata("design:type", String)
    ], GetRelatedWordsPathParams.prototype, "word", void 0);
    return GetRelatedWordsPathParams;
}(SpeakeasyBase));
export { GetRelatedWordsPathParams };
export var GetRelatedWordsRelationshipTypesEnum;
(function (GetRelatedWordsRelationshipTypesEnum) {
    GetRelatedWordsRelationshipTypesEnum["Synonym"] = "synonym";
    GetRelatedWordsRelationshipTypesEnum["Antonym"] = "antonym";
    GetRelatedWordsRelationshipTypesEnum["Variant"] = "variant";
    GetRelatedWordsRelationshipTypesEnum["Equivalent"] = "equivalent";
    GetRelatedWordsRelationshipTypesEnum["CrossReference"] = "cross-reference";
    GetRelatedWordsRelationshipTypesEnum["RelatedWord"] = "related-word";
    GetRelatedWordsRelationshipTypesEnum["Rhyme"] = "rhyme";
    GetRelatedWordsRelationshipTypesEnum["Form"] = "form";
    GetRelatedWordsRelationshipTypesEnum["EtymologicallyRelatedTerm"] = "etymologically-related-term";
    GetRelatedWordsRelationshipTypesEnum["Hypernym"] = "hypernym";
    GetRelatedWordsRelationshipTypesEnum["Hyponym"] = "hyponym";
    GetRelatedWordsRelationshipTypesEnum["InflectedForm"] = "inflected-form";
    GetRelatedWordsRelationshipTypesEnum["Primary"] = "primary";
    GetRelatedWordsRelationshipTypesEnum["SameContext"] = "same-context";
    GetRelatedWordsRelationshipTypesEnum["VerbForm"] = "verb-form";
    GetRelatedWordsRelationshipTypesEnum["VerbStem"] = "verb-stem";
    GetRelatedWordsRelationshipTypesEnum["HasTopic"] = "has_topic";
})(GetRelatedWordsRelationshipTypesEnum || (GetRelatedWordsRelationshipTypesEnum = {}));
export var GetRelatedWordsUseCanonicalEnum;
(function (GetRelatedWordsUseCanonicalEnum) {
    GetRelatedWordsUseCanonicalEnum["False"] = "false";
    GetRelatedWordsUseCanonicalEnum["True"] = "true";
})(GetRelatedWordsUseCanonicalEnum || (GetRelatedWordsUseCanonicalEnum = {}));
var GetRelatedWordsQueryParams = /** @class */ (function (_super) {
    __extends(GetRelatedWordsQueryParams, _super);
    function GetRelatedWordsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limitPerRelationshipType" }),
        __metadata("design:type", Number)
    ], GetRelatedWordsQueryParams.prototype, "limitPerRelationshipType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=relationshipTypes" }),
        __metadata("design:type", String)
    ], GetRelatedWordsQueryParams.prototype, "relationshipTypes", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=useCanonical" }),
        __metadata("design:type", String)
    ], GetRelatedWordsQueryParams.prototype, "useCanonical", void 0);
    return GetRelatedWordsQueryParams;
}(SpeakeasyBase));
export { GetRelatedWordsQueryParams };
var GetRelatedWordsRequest = /** @class */ (function (_super) {
    __extends(GetRelatedWordsRequest, _super);
    function GetRelatedWordsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetRelatedWordsPathParams)
    ], GetRelatedWordsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetRelatedWordsQueryParams)
    ], GetRelatedWordsRequest.prototype, "queryParams", void 0);
    return GetRelatedWordsRequest;
}(SpeakeasyBase));
export { GetRelatedWordsRequest };
var GetRelatedWordsResponse = /** @class */ (function (_super) {
    __extends(GetRelatedWordsResponse, _super);
    function GetRelatedWordsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetRelatedWordsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetRelatedWordsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetRelatedWordsResponse.prototype, "statusCode", void 0);
    return GetRelatedWordsResponse;
}(SpeakeasyBase));
export { GetRelatedWordsResponse };
