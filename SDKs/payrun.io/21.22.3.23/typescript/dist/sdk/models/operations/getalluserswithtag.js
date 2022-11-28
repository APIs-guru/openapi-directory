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
var GetAllUsersWithTagPathParams = /** @class */ (function (_super) {
    __extends(GetAllUsersWithTagPathParams, _super);
    function GetAllUsersWithTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TagId" }),
        __metadata("design:type", String)
    ], GetAllUsersWithTagPathParams.prototype, "tagId", void 0);
    return GetAllUsersWithTagPathParams;
}(SpeakeasyBase));
export { GetAllUsersWithTagPathParams };
var GetAllUsersWithTagHeaders = /** @class */ (function (_super) {
    __extends(GetAllUsersWithTagHeaders, _super);
    function GetAllUsersWithTagHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetAllUsersWithTagHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetAllUsersWithTagHeaders.prototype, "authorization", void 0);
    return GetAllUsersWithTagHeaders;
}(SpeakeasyBase));
export { GetAllUsersWithTagHeaders };
var GetAllUsersWithTagRequest = /** @class */ (function (_super) {
    __extends(GetAllUsersWithTagRequest, _super);
    function GetAllUsersWithTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllUsersWithTagPathParams)
    ], GetAllUsersWithTagRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllUsersWithTagHeaders)
    ], GetAllUsersWithTagRequest.prototype, "headers", void 0);
    return GetAllUsersWithTagRequest;
}(SpeakeasyBase));
export { GetAllUsersWithTagRequest };
var GetAllUsersWithTagResponse = /** @class */ (function (_super) {
    __extends(GetAllUsersWithTagResponse, _super);
    function GetAllUsersWithTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAllUsersWithTagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetAllUsersWithTagResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LinkCollection)
    ], GetAllUsersWithTagResponse.prototype, "linkCollection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAllUsersWithTagResponse.prototype, "statusCode", void 0);
    return GetAllUsersWithTagResponse;
}(SpeakeasyBase));
export { GetAllUsersWithTagResponse };
