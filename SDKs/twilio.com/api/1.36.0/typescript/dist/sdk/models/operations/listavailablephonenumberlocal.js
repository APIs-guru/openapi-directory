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
import * as shared from "../shared";
export var LISTAVAILABLEPHONENUMBERLOCAL_SERVERS = [
    "https://api.twilio.com",
];
var ListAvailablePhoneNumberLocalPathParams = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberLocalPathParams, _super);
    function ListAvailablePhoneNumberLocalPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CountryCode" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalPathParams.prototype, "countryCode", void 0);
    return ListAvailablePhoneNumberLocalPathParams;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberLocalPathParams };
var ListAvailablePhoneNumberLocalQueryParams = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberLocalQueryParams, _super);
    function ListAvailablePhoneNumberLocalQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AreaCode" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "areaCode", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Beta" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "beta", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Contains" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "contains", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Distance" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "distance", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ExcludeAllAddressRequired" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "excludeAllAddressRequired", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ExcludeForeignAddressRequired" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "excludeForeignAddressRequired", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ExcludeLocalAddressRequired" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "excludeLocalAddressRequired", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=FaxEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "faxEnabled", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InLata" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "inLata", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InLocality" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "inLocality", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InPostalCode" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "inPostalCode", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InRateCenter" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "inRateCenter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InRegion" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "inRegion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MmsEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "mmsEnabled", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NearLatLong" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "nearLatLong", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NearNumber" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "nearNumber", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SmsEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "smsEnabled", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VoiceEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberLocalQueryParams.prototype, "voiceEnabled", void 0);
    return ListAvailablePhoneNumberLocalQueryParams;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberLocalQueryParams };
var ListAvailablePhoneNumberLocalSecurity = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberLocalSecurity, _super);
    function ListAvailablePhoneNumberLocalSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListAvailablePhoneNumberLocalSecurity.prototype, "accountSidAuthToken", void 0);
    return ListAvailablePhoneNumberLocalSecurity;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberLocalSecurity };
var ListAvailablePhoneNumberLocalRequest = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberLocalRequest, _super);
    function ListAvailablePhoneNumberLocalRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAvailablePhoneNumberLocalPathParams)
    ], ListAvailablePhoneNumberLocalRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAvailablePhoneNumberLocalQueryParams)
    ], ListAvailablePhoneNumberLocalRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAvailablePhoneNumberLocalSecurity)
    ], ListAvailablePhoneNumberLocalRequest.prototype, "security", void 0);
    return ListAvailablePhoneNumberLocalRequest;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberLocalRequest };
var ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse, _super);
    function ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=available_phone_numbers", elemType: shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocal }),
        __metadata("design:type", Array)
    ], ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse.prototype, "availablePhoneNumbers", void 0);
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse.prototype, "uri", void 0);
    return ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse };
var ListAvailablePhoneNumberLocalResponse = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberLocalResponse, _super);
    function ListAvailablePhoneNumberLocalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberLocalResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse)
    ], ListAvailablePhoneNumberLocalResponse.prototype, "listAvailablePhoneNumberLocalResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberLocalResponse.prototype, "statusCode", void 0);
    return ListAvailablePhoneNumberLocalResponse;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberLocalResponse };
