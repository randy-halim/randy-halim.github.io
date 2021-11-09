welcome! we got many things, like

- blog posts
- projects
- material for classes (iykyk)
- `the v o i d`
- and more!

so don't be shy and stay a while!

— randy✨

ps. this site is currently a big work in progress. things should be looking better soon ✨

# recent blog posts

{% for post in site.posts %}

## [{{ post.date | date: "%m/%d/%Y" }} — {{ post.title }}]({{ post.url | relative_url }})

{{ post.excerpt }}

-----

{% endfor %}
