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
var AddVideoToProjectAlt1PathParams = /** @class */ (function (_super) {
    __extends(AddVideoToProjectAlt1PathParams, _super);
    function AddVideoToProjectAlt1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", Number)
    ], AddVideoToProjectAlt1PathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" }),
        __metadata("design:type", Number)
    ], AddVideoToProjectAlt1PathParams.prototype, "videoId", void 0);
    return AddVideoToProjectAlt1PathParams;
}(SpeakeasyBase));
export { AddVideoToProjectAlt1PathParams };
var AddVideoToProjectAlt1Security = /** @class */ (function (_super) {
    __extends(AddVideoToProjectAlt1Security, _super);
    function AddVideoToProjectAlt1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AddVideoToProjectAlt1Security.prototype, "oauth2", void 0);
    return AddVideoToProjectAlt1Security;
}(SpeakeasyBase));
export { AddVideoToProjectAlt1Security };
var AddVideoToProjectAlt1Request = /** @class */ (function (_super) {
    __extends(AddVideoToProjectAlt1Request, _super);
    function AddVideoToProjectAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddVideoToProjectAlt1PathParams)
    ], AddVideoToProjectAlt1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddVideoToProjectAlt1Security)
    ], AddVideoToProjectAlt1Request.prototype, "security", void 0);
    return AddVideoToProjectAlt1Request;
}(SpeakeasyBase));
export { AddVideoToProjectAlt1Request };
var AddVideoToProjectAlt1Response = /** @class */ (function (_super) {
    __extends(AddVideoToProjectAlt1Response, _super);
    function AddVideoToProjectAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddVideoToProjectAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddVideoToProjectAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], AddVideoToProjectAlt1Response.prototype, "error", void 0);
    return AddVideoToProjectAlt1Response;
}(SpeakeasyBase));
export { AddVideoToProjectAlt1Response };
