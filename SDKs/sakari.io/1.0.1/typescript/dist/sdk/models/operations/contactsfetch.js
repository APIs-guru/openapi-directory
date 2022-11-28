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
var ContactsFetchPathParams = /** @class */ (function (_super) {
    __extends(ContactsFetchPathParams, _super);
    function ContactsFetchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], ContactsFetchPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contactId" }),
        __metadata("design:type", String)
    ], ContactsFetchPathParams.prototype, "contactId", void 0);
    return ContactsFetchPathParams;
}(SpeakeasyBase));
export { ContactsFetchPathParams };
var ContactsFetchSecurity = /** @class */ (function (_super) {
    __extends(ContactsFetchSecurity, _super);
    function ContactsFetchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSakariAuth)
    ], ContactsFetchSecurity.prototype, "sakariAuth", void 0);
    return ContactsFetchSecurity;
}(SpeakeasyBase));
export { ContactsFetchSecurity };
var ContactsFetchRequest = /** @class */ (function (_super) {
    __extends(ContactsFetchRequest, _super);
    function ContactsFetchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactsFetchPathParams)
    ], ContactsFetchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactsFetchSecurity)
    ], ContactsFetchRequest.prototype, "security", void 0);
    return ContactsFetchRequest;
}(SpeakeasyBase));
export { ContactsFetchRequest };
var ContactsFetchResponse = /** @class */ (function (_super) {
    __extends(ContactsFetchResponse, _super);
    function ContactsFetchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ContactResponse)
    ], ContactsFetchResponse.prototype, "contactResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContactsFetchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContactsFetchResponse.prototype, "statusCode", void 0);
    return ContactsFetchResponse;
}(SpeakeasyBase));
export { ContactsFetchResponse };
