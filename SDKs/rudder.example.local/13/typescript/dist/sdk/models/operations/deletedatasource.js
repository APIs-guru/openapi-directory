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
var DeleteDataSourcePathParams = /** @class */ (function (_super) {
    __extends(DeleteDataSourcePathParams, _super);
    function DeleteDataSourcePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasourceId" }),
        __metadata("design:type", String)
    ], DeleteDataSourcePathParams.prototype, "datasourceId", void 0);
    return DeleteDataSourcePathParams;
}(SpeakeasyBase));
export { DeleteDataSourcePathParams };
export var DeleteDataSource200ApplicationJsonActionEnum;
(function (DeleteDataSource200ApplicationJsonActionEnum) {
    DeleteDataSource200ApplicationJsonActionEnum["DeleteDataSource"] = "deleteDataSource";
})(DeleteDataSource200ApplicationJsonActionEnum || (DeleteDataSource200ApplicationJsonActionEnum = {}));
var DeleteDataSource200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(DeleteDataSource200ApplicationJsonData, _super);
    function DeleteDataSource200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datasources", elemType: shared.Datasource }),
        __metadata("design:type", Array)
    ], DeleteDataSource200ApplicationJsonData.prototype, "datasources", void 0);
    return DeleteDataSource200ApplicationJsonData;
}(SpeakeasyBase));
export { DeleteDataSource200ApplicationJsonData };
export var DeleteDataSource200ApplicationJsonResultEnum;
(function (DeleteDataSource200ApplicationJsonResultEnum) {
    DeleteDataSource200ApplicationJsonResultEnum["Success"] = "success";
    DeleteDataSource200ApplicationJsonResultEnum["Error"] = "error";
})(DeleteDataSource200ApplicationJsonResultEnum || (DeleteDataSource200ApplicationJsonResultEnum = {}));
var DeleteDataSource200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDataSource200ApplicationJson, _super);
    function DeleteDataSource200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], DeleteDataSource200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", DeleteDataSource200ApplicationJsonData)
    ], DeleteDataSource200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], DeleteDataSource200ApplicationJson.prototype, "result", void 0);
    return DeleteDataSource200ApplicationJson;
}(SpeakeasyBase));
export { DeleteDataSource200ApplicationJson };
var DeleteDataSourceRequest = /** @class */ (function (_super) {
    __extends(DeleteDataSourceRequest, _super);
    function DeleteDataSourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDataSourcePathParams)
    ], DeleteDataSourceRequest.prototype, "pathParams", void 0);
    return DeleteDataSourceRequest;
}(SpeakeasyBase));
export { DeleteDataSourceRequest };
var DeleteDataSourceResponse = /** @class */ (function (_super) {
    __extends(DeleteDataSourceResponse, _super);
    function DeleteDataSourceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteDataSourceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteDataSourceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDataSource200ApplicationJson)
    ], DeleteDataSourceResponse.prototype, "deleteDataSource200ApplicationJsonObject", void 0);
    return DeleteDataSourceResponse;
}(SpeakeasyBase));
export { DeleteDataSourceResponse };
