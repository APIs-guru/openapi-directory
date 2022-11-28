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
var EditProjectAlt1PathParams = /** @class */ (function (_super) {
    __extends(EditProjectAlt1PathParams, _super);
    function EditProjectAlt1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", Number)
    ], EditProjectAlt1PathParams.prototype, "projectId", void 0);
    return EditProjectAlt1PathParams;
}(SpeakeasyBase));
export { EditProjectAlt1PathParams };
var EditProjectAlt1RequestBody = /** @class */ (function (_super) {
    __extends(EditProjectAlt1RequestBody, _super);
    function EditProjectAlt1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EditProjectAlt1RequestBody.prototype, "name", void 0);
    return EditProjectAlt1RequestBody;
}(SpeakeasyBase));
export { EditProjectAlt1RequestBody };
var EditProjectAlt1Security = /** @class */ (function (_super) {
    __extends(EditProjectAlt1Security, _super);
    function EditProjectAlt1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], EditProjectAlt1Security.prototype, "oauth2", void 0);
    return EditProjectAlt1Security;
}(SpeakeasyBase));
export { EditProjectAlt1Security };
var EditProjectAlt1Request = /** @class */ (function (_super) {
    __extends(EditProjectAlt1Request, _super);
    function EditProjectAlt1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EditProjectAlt1PathParams)
    ], EditProjectAlt1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", EditProjectAlt1RequestBody)
    ], EditProjectAlt1Request.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EditProjectAlt1Security)
    ], EditProjectAlt1Request.prototype, "security", void 0);
    return EditProjectAlt1Request;
}(SpeakeasyBase));
export { EditProjectAlt1Request };
var EditProjectAlt1Response = /** @class */ (function (_super) {
    __extends(EditProjectAlt1Response, _super);
    function EditProjectAlt1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EditProjectAlt1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EditProjectAlt1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], EditProjectAlt1Response.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Project)
    ], EditProjectAlt1Response.prototype, "project", void 0);
    return EditProjectAlt1Response;
}(SpeakeasyBase));
export { EditProjectAlt1Response };
