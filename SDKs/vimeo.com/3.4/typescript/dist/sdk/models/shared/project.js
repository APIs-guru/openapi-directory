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
import { User } from "./user";
// ProjectMetadataConnectionsVideos
/**
 * A standard connection object indicating how to get all the videos in this project.
**/
var ProjectMetadataConnectionsVideos = /** @class */ (function (_super) {
    __extends(ProjectMetadataConnectionsVideos, _super);
    function ProjectMetadataConnectionsVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", Array)
    ], ProjectMetadataConnectionsVideos.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ProjectMetadataConnectionsVideos.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ProjectMetadataConnectionsVideos.prototype, "uri", void 0);
    return ProjectMetadataConnectionsVideos;
}(SpeakeasyBase));
export { ProjectMetadataConnectionsVideos };
// ProjectMetadataConnections
/**
 * A list of resource URIs related to the project.
**/
var ProjectMetadataConnections = /** @class */ (function (_super) {
    __extends(ProjectMetadataConnections, _super);
    function ProjectMetadataConnections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos" }),
        __metadata("design:type", ProjectMetadataConnectionsVideos)
    ], ProjectMetadataConnections.prototype, "videos", void 0);
    return ProjectMetadataConnections;
}(SpeakeasyBase));
export { ProjectMetadataConnections };
// ProjectMetadata
/**
 * The project's metadata.
**/
var ProjectMetadata = /** @class */ (function (_super) {
    __extends(ProjectMetadata, _super);
    function ProjectMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connections" }),
        __metadata("design:type", ProjectMetadataConnections)
    ], ProjectMetadata.prototype, "connections", void 0);
    return ProjectMetadata;
}(SpeakeasyBase));
export { ProjectMetadata };
var Project = /** @class */ (function (_super) {
    __extends(Project, _super);
    function Project() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], Project.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", ProjectMetadata)
    ], Project.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modified_time" }),
        __metadata("design:type", String)
    ], Project.prototype, "modifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Project.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_key" }),
        __metadata("design:type", String)
    ], Project.prototype, "resourceKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], Project.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", User)
    ], Project.prototype, "user", void 0);
    return Project;
}(SpeakeasyBase));
export { Project };
