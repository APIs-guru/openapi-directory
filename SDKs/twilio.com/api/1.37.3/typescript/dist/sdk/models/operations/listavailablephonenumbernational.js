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
export var ListAvailablePhoneNumberNationalServerList = [
    "https://api.twilio.com",
];
var ListAvailablePhoneNumberNationalPathParams = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberNationalPathParams, _super);
    function ListAvailablePhoneNumberNationalPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberNationalPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CountryCode" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberNationalPathParams.prototype, "countryCode", void 0);
    return ListAvailablePhoneNumberNationalPathParams;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberNationalPathParams };
var ListAvailablePhoneNumberNationalQueryParams = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberNationalQueryParams, _super);
    function ListAvailablePhoneNumberNationalQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AreaCode" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberNationalQueryParams.prototype, "areaCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Beta" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberNationalQueryParams.prototype, "beta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Contains" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberNationalQueryParams.prototype, "contains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Distance" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberNationalQueryParams.prototype, "distance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ExcludeAllAddressRequired" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberNationalQueryParams.prototype, "excludeAllAddressRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ExcludeForeignAddressRequired" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberNationalQueryParams.prototype, "excludeForeignAddressRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ExcludeLocalAddressRequired" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberNationalQueryParams.prototype, "excludeLocalAddressRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FaxEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberNationalQueryParams.prototype, "faxEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InLata" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberNationalQueryParams.prototype, "inLata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InLocality" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberNationalQueryParams.prototype, "inLocality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InPostalCode" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberNationalQueryParams.prototype, "inPostalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InRateCenter" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberNationalQueryParams.prototype, "inRateCenter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InRegion" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberNationalQueryParams.prototype, "inRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MmsEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberNationalQueryParams.prototype, "mmsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NearLatLong" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberNationalQueryParams.prototype, "nearLatLong", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NearNumber" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberNationalQueryParams.prototype, "nearNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberNationalQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SmsEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberNationalQueryParams.prototype, "smsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VoiceEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberNationalQueryParams.prototype, "voiceEnabled", void 0);
    return ListAvailablePhoneNumberNationalQueryParams;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberNationalQueryParams };
var ListAvailablePhoneNumberNationalSecurity = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberNationalSecurity, _super);
    function ListAvailablePhoneNumberNationalSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListAvailablePhoneNumberNationalSecurity.prototype, "accountSidAuthToken", void 0);
    return ListAvailablePhoneNumberNationalSecurity;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberNationalSecurity };
var ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse, _super);
    function ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available_phone_numbers", elemType: shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational }),
        __metadata("design:type", Array)
    ], ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse.prototype, "availablePhoneNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse.prototype, "firstPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse.prototype, "nextPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse.prototype, "previousPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse.prototype, "uri", void 0);
    return ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse };
var ListAvailablePhoneNumberNationalRequest = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberNationalRequest, _super);
    function ListAvailablePhoneNumberNationalRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberNationalRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAvailablePhoneNumberNationalPathParams)
    ], ListAvailablePhoneNumberNationalRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAvailablePhoneNumberNationalQueryParams)
    ], ListAvailablePhoneNumberNationalRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAvailablePhoneNumberNationalSecurity)
    ], ListAvailablePhoneNumberNationalRequest.prototype, "security", void 0);
    return ListAvailablePhoneNumberNationalRequest;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberNationalRequest };
var ListAvailablePhoneNumberNationalResponse = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberNationalResponse, _super);
    function ListAvailablePhoneNumberNationalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberNationalResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse)
    ], ListAvailablePhoneNumberNationalResponse.prototype, "listAvailablePhoneNumberNationalResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberNationalResponse.prototype, "statusCode", void 0);
    return ListAvailablePhoneNumberNationalResponse;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberNationalResponse };
