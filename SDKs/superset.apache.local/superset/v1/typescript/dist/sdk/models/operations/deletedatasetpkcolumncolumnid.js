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
var DeleteDatasetPkColumnColumnIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteDatasetPkColumnColumnIdPathParams, _super);
    function DeleteDatasetPkColumnColumnIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_id" }),
        __metadata("design:type", Number)
    ], DeleteDatasetPkColumnColumnIdPathParams.prototype, "columnId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], DeleteDatasetPkColumnColumnIdPathParams.prototype, "pk", void 0);
    return DeleteDatasetPkColumnColumnIdPathParams;
}(SpeakeasyBase));
export { DeleteDatasetPkColumnColumnIdPathParams };
var DeleteDatasetPkColumnColumnIdSecurity = /** @class */ (function (_super) {
    __extends(DeleteDatasetPkColumnColumnIdSecurity, _super);
    function DeleteDatasetPkColumnColumnIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], DeleteDatasetPkColumnColumnIdSecurity.prototype, "jwt", void 0);
    return DeleteDatasetPkColumnColumnIdSecurity;
}(SpeakeasyBase));
export { DeleteDatasetPkColumnColumnIdSecurity };
var DeleteDatasetPkColumnColumnId200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDatasetPkColumnColumnId200ApplicationJson, _super);
    function DeleteDatasetPkColumnColumnId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDatasetPkColumnColumnId200ApplicationJson.prototype, "message", void 0);
    return DeleteDatasetPkColumnColumnId200ApplicationJson;
}(SpeakeasyBase));
export { DeleteDatasetPkColumnColumnId200ApplicationJson };
var DeleteDatasetPkColumnColumnId401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDatasetPkColumnColumnId401ApplicationJson, _super);
    function DeleteDatasetPkColumnColumnId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDatasetPkColumnColumnId401ApplicationJson.prototype, "message", void 0);
    return DeleteDatasetPkColumnColumnId401ApplicationJson;
}(SpeakeasyBase));
export { DeleteDatasetPkColumnColumnId401ApplicationJson };
var DeleteDatasetPkColumnColumnId403ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDatasetPkColumnColumnId403ApplicationJson, _super);
    function DeleteDatasetPkColumnColumnId403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDatasetPkColumnColumnId403ApplicationJson.prototype, "message", void 0);
    return DeleteDatasetPkColumnColumnId403ApplicationJson;
}(SpeakeasyBase));
export { DeleteDatasetPkColumnColumnId403ApplicationJson };
var DeleteDatasetPkColumnColumnId404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDatasetPkColumnColumnId404ApplicationJson, _super);
    function DeleteDatasetPkColumnColumnId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDatasetPkColumnColumnId404ApplicationJson.prototype, "message", void 0);
    return DeleteDatasetPkColumnColumnId404ApplicationJson;
}(SpeakeasyBase));
export { DeleteDatasetPkColumnColumnId404ApplicationJson };
var DeleteDatasetPkColumnColumnId422ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDatasetPkColumnColumnId422ApplicationJson, _super);
    function DeleteDatasetPkColumnColumnId422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDatasetPkColumnColumnId422ApplicationJson.prototype, "message", void 0);
    return DeleteDatasetPkColumnColumnId422ApplicationJson;
}(SpeakeasyBase));
export { DeleteDatasetPkColumnColumnId422ApplicationJson };
var DeleteDatasetPkColumnColumnId500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDatasetPkColumnColumnId500ApplicationJson, _super);
    function DeleteDatasetPkColumnColumnId500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDatasetPkColumnColumnId500ApplicationJson.prototype, "message", void 0);
    return DeleteDatasetPkColumnColumnId500ApplicationJson;
}(SpeakeasyBase));
export { DeleteDatasetPkColumnColumnId500ApplicationJson };
var DeleteDatasetPkColumnColumnIdRequest = /** @class */ (function (_super) {
    __extends(DeleteDatasetPkColumnColumnIdRequest, _super);
    function DeleteDatasetPkColumnColumnIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatasetPkColumnColumnIdPathParams)
    ], DeleteDatasetPkColumnColumnIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatasetPkColumnColumnIdSecurity)
    ], DeleteDatasetPkColumnColumnIdRequest.prototype, "security", void 0);
    return DeleteDatasetPkColumnColumnIdRequest;
}(SpeakeasyBase));
export { DeleteDatasetPkColumnColumnIdRequest };
var DeleteDatasetPkColumnColumnIdResponse = /** @class */ (function (_super) {
    __extends(DeleteDatasetPkColumnColumnIdResponse, _super);
    function DeleteDatasetPkColumnColumnIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteDatasetPkColumnColumnIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatasetPkColumnColumnId200ApplicationJson)
    ], DeleteDatasetPkColumnColumnIdResponse.prototype, "deleteDatasetPkColumnColumnId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatasetPkColumnColumnId401ApplicationJson)
    ], DeleteDatasetPkColumnColumnIdResponse.prototype, "deleteDatasetPkColumnColumnId401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatasetPkColumnColumnId403ApplicationJson)
    ], DeleteDatasetPkColumnColumnIdResponse.prototype, "deleteDatasetPkColumnColumnId403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatasetPkColumnColumnId404ApplicationJson)
    ], DeleteDatasetPkColumnColumnIdResponse.prototype, "deleteDatasetPkColumnColumnId404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatasetPkColumnColumnId422ApplicationJson)
    ], DeleteDatasetPkColumnColumnIdResponse.prototype, "deleteDatasetPkColumnColumnId422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatasetPkColumnColumnId500ApplicationJson)
    ], DeleteDatasetPkColumnColumnIdResponse.prototype, "deleteDatasetPkColumnColumnId500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteDatasetPkColumnColumnIdResponse.prototype, "statusCode", void 0);
    return DeleteDatasetPkColumnColumnIdResponse;
}(SpeakeasyBase));
export { DeleteDatasetPkColumnColumnIdResponse };
