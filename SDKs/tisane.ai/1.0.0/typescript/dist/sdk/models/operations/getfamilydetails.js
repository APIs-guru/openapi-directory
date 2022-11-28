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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
var GetFamilyDetailsQueryParams = /** @class */ (function (_super) {
    __extends(GetFamilyDetailsQueryParams, _super);
    function GetFamilyDetailsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], GetFamilyDetailsQueryParams.prototype, "id", void 0);
    return GetFamilyDetailsQueryParams;
}(SpeakeasyBase));
export { GetFamilyDetailsQueryParams };
var GetFamilyDetails200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetFamilyDetails200ApplicationJson, _super);
    function GetFamilyDetails200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=definition" }),
        __metadata("design:type", String)
    ], GetFamilyDetails200ApplicationJson.prototype, "definition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetFamilyDetails200ApplicationJson.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hypernyms" }),
        __metadata("design:type", Array)
    ], GetFamilyDetails200ApplicationJson.prototype, "hypernyms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permId" }),
        __metadata("design:type", String)
    ], GetFamilyDetails200ApplicationJson.prototype, "permId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], GetFamilyDetails200ApplicationJson.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wikidata" }),
        __metadata("design:type", String)
    ], GetFamilyDetails200ApplicationJson.prototype, "wikidata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wordnet30" }),
        __metadata("design:type", String)
    ], GetFamilyDetails200ApplicationJson.prototype, "wordnet30", void 0);
    return GetFamilyDetails200ApplicationJson;
}(SpeakeasyBase));
export { GetFamilyDetails200ApplicationJson };
var GetFamilyDetailsRequest = /** @class */ (function (_super) {
    __extends(GetFamilyDetailsRequest, _super);
    function GetFamilyDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFamilyDetailsQueryParams)
    ], GetFamilyDetailsRequest.prototype, "queryParams", void 0);
    return GetFamilyDetailsRequest;
}(SpeakeasyBase));
export { GetFamilyDetailsRequest };
var GetFamilyDetailsResponse = /** @class */ (function (_super) {
    __extends(GetFamilyDetailsResponse, _super);
    function GetFamilyDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFamilyDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFamilyDetailsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFamilyDetails200ApplicationJson)
    ], GetFamilyDetailsResponse.prototype, "getFamilyDetails200ApplicationJsonObject", void 0);
    return GetFamilyDetailsResponse;
}(SpeakeasyBase));
export { GetFamilyDetailsResponse };
