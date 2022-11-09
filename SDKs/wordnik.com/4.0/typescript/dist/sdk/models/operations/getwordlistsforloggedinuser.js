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
var GetWordListsForLoggedInUserQueryParams = /** @class */ (function (_super) {
    __extends(GetWordListsForLoggedInUserQueryParams, _super);
    function GetWordListsForLoggedInUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetWordListsForLoggedInUserQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], GetWordListsForLoggedInUserQueryParams.prototype, "skip", void 0);
    return GetWordListsForLoggedInUserQueryParams;
}(SpeakeasyBase));
export { GetWordListsForLoggedInUserQueryParams };
var GetWordListsForLoggedInUserHeaders = /** @class */ (function (_super) {
    __extends(GetWordListsForLoggedInUserHeaders, _super);
    function GetWordListsForLoggedInUserHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=auth_token" }),
        __metadata("design:type", String)
    ], GetWordListsForLoggedInUserHeaders.prototype, "authToken", void 0);
    return GetWordListsForLoggedInUserHeaders;
}(SpeakeasyBase));
export { GetWordListsForLoggedInUserHeaders };
var GetWordListsForLoggedInUserRequest = /** @class */ (function (_super) {
    __extends(GetWordListsForLoggedInUserRequest, _super);
    function GetWordListsForLoggedInUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetWordListsForLoggedInUserQueryParams)
    ], GetWordListsForLoggedInUserRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetWordListsForLoggedInUserHeaders)
    ], GetWordListsForLoggedInUserRequest.prototype, "headers", void 0);
    return GetWordListsForLoggedInUserRequest;
}(SpeakeasyBase));
export { GetWordListsForLoggedInUserRequest };
var GetWordListsForLoggedInUserResponse = /** @class */ (function (_super) {
    __extends(GetWordListsForLoggedInUserResponse, _super);
    function GetWordListsForLoggedInUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetWordListsForLoggedInUserResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetWordListsForLoggedInUserResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetWordListsForLoggedInUserResponse.prototype, "statusCode", void 0);
    return GetWordListsForLoggedInUserResponse;
}(SpeakeasyBase));
export { GetWordListsForLoggedInUserResponse };
