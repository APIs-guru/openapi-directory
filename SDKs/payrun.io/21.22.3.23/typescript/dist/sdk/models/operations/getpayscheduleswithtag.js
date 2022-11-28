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
var GetPaySchedulesWithTagPathParams = /** @class */ (function (_super) {
    __extends(GetPaySchedulesWithTagPathParams, _super);
    function GetPaySchedulesWithTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" }),
        __metadata("design:type", String)
    ], GetPaySchedulesWithTagPathParams.prototype, "employerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TagId" }),
        __metadata("design:type", String)
    ], GetPaySchedulesWithTagPathParams.prototype, "tagId", void 0);
    return GetPaySchedulesWithTagPathParams;
}(SpeakeasyBase));
export { GetPaySchedulesWithTagPathParams };
var GetPaySchedulesWithTagHeaders = /** @class */ (function (_super) {
    __extends(GetPaySchedulesWithTagHeaders, _super);
    function GetPaySchedulesWithTagHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" }),
        __metadata("design:type", String)
    ], GetPaySchedulesWithTagHeaders.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetPaySchedulesWithTagHeaders.prototype, "authorization", void 0);
    return GetPaySchedulesWithTagHeaders;
}(SpeakeasyBase));
export { GetPaySchedulesWithTagHeaders };
var GetPaySchedulesWithTagRequest = /** @class */ (function (_super) {
    __extends(GetPaySchedulesWithTagRequest, _super);
    function GetPaySchedulesWithTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaySchedulesWithTagPathParams)
    ], GetPaySchedulesWithTagRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaySchedulesWithTagHeaders)
    ], GetPaySchedulesWithTagRequest.prototype, "headers", void 0);
    return GetPaySchedulesWithTagRequest;
}(SpeakeasyBase));
export { GetPaySchedulesWithTagRequest };
var GetPaySchedulesWithTagResponse = /** @class */ (function (_super) {
    __extends(GetPaySchedulesWithTagResponse, _super);
    function GetPaySchedulesWithTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPaySchedulesWithTagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorModel)
    ], GetPaySchedulesWithTagResponse.prototype, "errorModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LinkCollection)
    ], GetPaySchedulesWithTagResponse.prototype, "linkCollection", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPaySchedulesWithTagResponse.prototype, "statusCode", void 0);
    return GetPaySchedulesWithTagResponse;
}(SpeakeasyBase));
export { GetPaySchedulesWithTagResponse };
