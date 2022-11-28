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
import * as shared from "../shared";
var GetCustomersAccountAnnouncementsPathParams = /** @class */ (function (_super) {
    __extends(GetCustomersAccountAnnouncementsPathParams, _super);
    function GetCustomersAccountAnnouncementsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account" }),
        __metadata("design:type", Number)
    ], GetCustomersAccountAnnouncementsPathParams.prototype, "account", void 0);
    return GetCustomersAccountAnnouncementsPathParams;
}(SpeakeasyBase));
export { GetCustomersAccountAnnouncementsPathParams };
var GetCustomersAccountAnnouncements200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCustomersAccountAnnouncements200ApplicationJson, _super);
    function GetCustomersAccountAnnouncements200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list", elemType: shared.OneannouncementsPostResponses201ContentApplication1jsonSchema }),
        __metadata("design:type", Array)
    ], GetCustomersAccountAnnouncements200ApplicationJson.prototype, "list", void 0);
    return GetCustomersAccountAnnouncements200ApplicationJson;
}(SpeakeasyBase));
export { GetCustomersAccountAnnouncements200ApplicationJson };
var GetCustomersAccountAnnouncementsRequest = /** @class */ (function (_super) {
    __extends(GetCustomersAccountAnnouncementsRequest, _super);
    function GetCustomersAccountAnnouncementsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCustomersAccountAnnouncementsPathParams)
    ], GetCustomersAccountAnnouncementsRequest.prototype, "pathParams", void 0);
    return GetCustomersAccountAnnouncementsRequest;
}(SpeakeasyBase));
export { GetCustomersAccountAnnouncementsRequest };
var GetCustomersAccountAnnouncementsResponse = /** @class */ (function (_super) {
    __extends(GetCustomersAccountAnnouncementsResponse, _super);
    function GetCustomersAccountAnnouncementsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCustomersAccountAnnouncementsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCustomersAccountAnnouncements200ApplicationJson)
    ], GetCustomersAccountAnnouncementsResponse.prototype, "getCustomersAccountAnnouncements200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCustomersAccountAnnouncementsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OneannouncementsPostResponses403ContentApplication1jsonSchema)
    ], GetCustomersAccountAnnouncementsResponse.prototype, "oneannouncementsPostResponses403ContentApplication1jsonSchema", void 0);
    return GetCustomersAccountAnnouncementsResponse;
}(SpeakeasyBase));
export { GetCustomersAccountAnnouncementsResponse };
