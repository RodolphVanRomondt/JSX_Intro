const Tweet = ({ username, name, date, message }) => {
    return (

        <div class="row d-flex justify-content-center p-2 g-col-6">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                    <h5 class="card-header">{name}</h5>
                    <div class="card-body">
                        <h5 class="card-subtitle mb-2 text-body-secondary"><span>@</span>{username}</h5>
                        <p class="card-text">{message}</p>
                        <footer class="blockquote-footer">
                            {date}
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}