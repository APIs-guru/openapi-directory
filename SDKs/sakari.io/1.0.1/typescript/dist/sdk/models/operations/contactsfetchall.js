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
var ContactsFetchAllPathParams = /** @class */ (function (_super) {
    __extends(ContactsFetchAllPathParams, _super);
    function ContactsFetchAllPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], ContactsFetchAllPathParams.prototype, "accountId", void 0);
    return ContactsFetchAllPathParams;
}(SpeakeasyBase));
export { ContactsFetchAllPathParams };
var ContactsFetchAllQueryParams = /** @class */ (function (_super) {
    __extends(ContactsFetchAllQueryParams, _super);
    function ContactsFetchAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], ContactsFetchAllQueryParams.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=firstName" }),
        __metadata("design:type", String)
    ], ContactsFetchAllQueryParams.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lastName" }),
        __metadata("design:type", String)
    ], ContactsFetchAllQueryParams.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ContactsFetchAllQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mobile" }),
        __metadata("design:type", String)
    ], ContactsFetchAllQueryParams.prototype, "mobile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ContactsFetchAllQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" }),
        __metadata("design:type", String)
    ], ContactsFetchAllQueryParams.prototype, "tags", void 0);
    return ContactsFetchAllQueryParams;
}(SpeakeasyBase));
export { ContactsFetchAllQueryParams };
var ContactsFetchAllSecurity = /** @class */ (function (_super) {
    __extends(ContactsFetchAllSecurity, _super);
    function ContactsFetchAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSakariAuth)
    ], ContactsFetchAllSecurity.prototype, "sakariAuth", void 0);
    return ContactsFetchAllSecurity;
}(SpeakeasyBase));
export { ContactsFetchAllSecurity };
var ContactsFetchAllRequest = /** @class */ (function (_super) {
    __extends(ContactsFetchAllRequest, _super);
    function ContactsFetchAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactsFetchAllPathParams)
    ], ContactsFetchAllRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactsFetchAllQueryParams)
    ], ContactsFetchAllRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactsFetchAllSecurity)
    ], ContactsFetchAllRequest.prototype, "security", void 0);
    return ContactsFetchAllRequest;
}(SpeakeasyBase));
export { ContactsFetchAllRequest };
var ContactsFetchAllResponse = /** @class */ (function (_super) {
    __extends(ContactsFetchAllResponse, _super);
    function ContactsFetchAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ContactsResponse)
    ], ContactsFetchAllResponse.prototype, "contactsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContactsFetchAllResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], ContactsFetchAllResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContactsFetchAllResponse.prototype, "statusCode", void 0);
    return ContactsFetchAllResponse;
}(SpeakeasyBase));
export { ContactsFetchAllResponse };
