class CompanyClass {
    constructor(id, name, image) {
        this.id = id;
        this.name = name;
        this.image = image;
    }

    getCompanyId() {
        return this.id;
    }

    getCompanyName() {
        return this.name;
    }

    getCompanyImage() {
        return this.image;
    }
}

class CompanyDetailClass extends CompanyClass {
    constructor(
        id,
        name,
        image,
        jobTitle,
        category,
        location,
        description,
        url
    ) {
        super(id, name, image);
        this.jobTitle = jobTitle;
        this.category = category;
        this.location = location;
        this.description = description;
        this.url = url;
    }

    getJobTitle() {
        return this.jobTitle;
    }

    getCategory() {
        return this.category;
    }

    getLocation() {
        return this.location;
    }

    getDescription() {
        return this.description;
    }

    getUrl() {
        return this.url;
    }
}

export { CompanyClass, CompanyDetailClass };
